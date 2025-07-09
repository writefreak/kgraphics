import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>, // Allow the ref to be of type HTMLDivElement | null
  callback: () => void // Callback function when click outside occurs
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if ref.current is not null and if the click is outside the element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(); // Call the callback if clicked outside
      }
    };

    // Add the event listeners to document
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup event listeners on component unmount or when ref or callback changes
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]); // Re-run the effect if ref or callback changes
};
