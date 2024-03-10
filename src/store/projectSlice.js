import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const response = await fetch("http://localhost:3000/projects");
    return response.json();
  }
);

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    items: [],
    selectedProjectId: null,
    status: "idle",
    error: null,
  },
  reducers: {
    selectProject: (state, action) => {
      state.selectedProjectId = action.payload;
    },
    addProject: (state, action) => {
      const newProject = action.payload;
      state.items.push(newProject);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        console.log("Fetched projects:", action.payload);
        state.items = action.payload;
        state.status = "succeeded";
          state.selectedProjectId = action.payload[0]?.id || null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectProject, addProject } = projectSlice.actions;

export default projectSlice.reducer;
