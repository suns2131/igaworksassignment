import axios from "axios";
import { useEffect, useState } from "react";

const useHXR = opts => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    axios
      .get(opts)
      .then(response => {
        setState({
          ...state,
          loading: false,
          data: response.data.data,
        });
      })
      .catch(error => {
        setState({
          ...state,
          error,
        });
      });
  }, []);

  return state;
};

export default useHXR;
