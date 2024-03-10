import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("http://localhost:3000/tasks");
  const tasks = await response.json();
  return tasks;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: { value: [], filteredTasks: [], status: "idle", error: null },
  reducers: {
    filterByStatus: (state, action) => {
      console.log("Filter payload:", action.payload);
      const { status, projectId } = action.payload;
      state.filteredTasks = state.value.filter((task) => {
        const statusMatch = status == null || task.completed == status;
        const projectMatch = projectId == null || task.projectId == projectId;
        return statusMatch && projectMatch;
      });
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.value = state.value.filter((task) => task.id !== taskId);
      state.filteredTasks = state.filteredTasks.filter(
        (task) => task.id !== taskId
      );
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      state.value.push(newTask);
      state.filteredTasks.push(newTask);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.value = action.payload;
        state.filteredTasks = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { filterByStatus, deleteTask, addTask } = taskSlice.actions;

export const selectTasks = (state) => state.tasks.filteredTasks;

export default taskSlice.reducer;
