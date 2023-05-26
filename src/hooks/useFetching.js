import { useState, useCallback, useEffect } from "react";

const useFetching = (requestFunction, isLoadOnMount = false) => {
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleDataLoad = useCallback(
    (...args) => {
      (async () => {
        try {
          setLoading(true);
          const response = await requestFunction(...args);

          setData(response);
        } catch (error) {
          setErrors(error.response.data);
        } finally {
          setLoading(false);
        }
      })();
    },
    [requestFunction]
  );

  useEffect(() => {
    if (isLoadOnMount) {
      handleDataLoad();
    }
  }, []);

  return { data, errors, handleDataLoad, isLoading };
};

export default useFetching;
