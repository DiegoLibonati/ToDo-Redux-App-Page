import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalState, PayloadGlobal } from "../../entities/entities";

const initialState: GlobalState = {
  sidebarMobile: false,
  modalAddCategory: false,
  modalAddTodo: false,
  messageAlert: "",
  typeAlert: "",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.sidebarMobile = true;
    },
    closeSidebar: (state) => {
      state.sidebarMobile = false;
    },
    openModalAddCategory: (state) => {
      state.modalAddCategory = true;
    },
    closeModalAddCategory: (state) => {
      state.modalAddCategory = false;
    },
    openModalAddTodo: (state) => {
      state.modalAddTodo = true;
    },
    closeModalAddTodo: (state) => {
      state.modalAddTodo = false;
    },
    displayAlert: (
      state,
      action: PayloadAction<PayloadGlobal["displayAlert"]>
    ) => {
      state.messageAlert = action.payload.message;
      state.typeAlert = action.payload.type;
    },
    resetAlert: (state) => {
      state.messageAlert = "";
      state.typeAlert = "";
    },
  },
});

export const {
  openSidebar,
  closeSidebar,
  openModalAddCategory,
  closeModalAddCategory,
  openModalAddTodo,
  closeModalAddTodo,
  displayAlert,
  resetAlert,
} = globalSlice.actions;

export default globalSlice.reducer;
