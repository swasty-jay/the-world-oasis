import { useEffect, useRef } from "react";

export const useCloseModal = (close) => {
  const ref = useRef();

  /// detecting a click outside of the modal

  useEffect(
    function () {
      ///1. create the handler fn
      function Handleclick(event) {
        if (ref.current && !ref.current.contains(event.target)) close();
      }

      ///2. adding the eventlistener
      document.addEventListener("click", Handleclick, true);

      ///3. removing the eventlistener after a successfull propagation

      return () => document.removeEventListener("click", Handleclick, true);
    },
    [close]
  );

  return ref;
};
