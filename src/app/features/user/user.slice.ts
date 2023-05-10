import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  signInWithEmail,
  createUserDocumentFromAuth,
  createUserWithEmail,
  getCurrentUser,
  UserData,
  signOutUser,
} from "../../../utils/firebase/firebase.utils";

export type UserState = {
  isLoading: boolean;
  currentUser: UserData | undefined;
  error: string | undefined;
};

const initialState: UserState = {
  isLoading: false,
  currentUser: {} as UserData,
  error: "",
};

export const isUserAuthenticated = createAsyncThunk(
  "user/isUserAuthenticated",
  async () => {
    const user = await getCurrentUser();
    if (user) {
      const userSnapshot = await createUserDocumentFromAuth(user, {});
      return userSnapshot?.data();
    } else {
      return {} as UserData;
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({
    email,
    password,
    signIn,
    displayName,
  }: {
    email: string;
    password: string;
    signIn: boolean;
    displayName?: string;
  }) => {
    if (signIn) {
      const user = await signInWithEmail(email, password);
      if (user) {
        const userSnapshot = await createUserDocumentFromAuth(user, {});
        if (userSnapshot) {
          const currentUser = userSnapshot.data();

          return currentUser;
        }
      }
    } else {
      const user = await createUserWithEmail(email, password);

      if (user) {
        const userSnapshot = await createUserDocumentFromAuth(user, {
          displayName,
        });
        if (userSnapshot) {
          const currentUser = userSnapshot.data();
          return currentUser;
        }
      }
    }
  }
);

export const signOutCurrentUser = createAsyncThunk("user/signout", async () => {
  const isSignedOut = await signOutUser();

  if (isSignedOut) {
    return {} as UserData;
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchUser.pending ||
        isUserAuthenticated.pending ||
        signOutCurrentUser.pending,
      (state) => {
        state.isLoading = true;
      }
    );
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: PayloadAction<UserData | undefined>) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.currentUser = {} as UserData;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(
      isUserAuthenticated.fulfilled,
      (state, action: PayloadAction<UserData | undefined>) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        state.error = "";
      }
    );
    builder.addCase(isUserAuthenticated.rejected, (state, action) => {
      state.isLoading = false;
      state.currentUser = {} as UserData;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(signOutCurrentUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = {} as UserData;
      state.error = "";
    });
    builder.addCase(signOutCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default userSlice.reducer;
