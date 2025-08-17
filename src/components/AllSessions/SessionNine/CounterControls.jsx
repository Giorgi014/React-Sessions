const CounterControls = ({ count, setCount, disabled }) => {
  return (
    <div className="flex justify-center gap-3">
      <button
        className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 disabled:opacity-50"
        onClick={() => setCount(count - 1)}
        disabled={disabled}
      >
        –
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 disabled:opacity-50"
        onClick={() => setCount(count + 1)}
        disabled={disabled}
      >
        +
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 disabled:opacity-50"
        onClick={() => setCount(0)}
        disabled={disabled}
      >
        Reset
      </button>
    </div>
  );
};
export default CounterControls;
