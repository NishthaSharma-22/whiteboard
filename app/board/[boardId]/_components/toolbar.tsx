export const Toolbar = () => {
  return (
    <div className="fixed -translate-y-1/2 top-1/2 left-2 flex flex-col gap-y-4">
      <div className="bg-white rounded-md p-1.5 gap-y-1 flex flex-col items-center shadow-md">
        <div>Pencil</div>
        <div>Eraser</div>
        <div>Swuare</div>
        <div>Color</div>
      </div>
      <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};
