export const getColor = (status: string) => {
    switch (status) {
      case "4 - eliminada":
        return "bg-red-600";
      case "1 - por hacer":
        return "bg-yellow-600";
      case "2 - en progreso":
        return "bg-blue-500";
      case "3 - completada":
        return "bg-green-600";
      default:
        return "bg-gray-500";
    }
  };