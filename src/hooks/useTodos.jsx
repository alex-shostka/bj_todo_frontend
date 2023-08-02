import { useMemo } from "react";

export const useSortedTodos = (todos, sort) => {
  const sortedTodos = useMemo(() => {
    if (sort) {
      return sort === "isComplete"
        ? [...todos].sort((a, b) => b[sort] - a[sort])
        : [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return todos;
  }, [todos, sort]);
  return sortedTodos;
};
