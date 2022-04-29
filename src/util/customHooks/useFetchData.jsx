import { useEffect, useState } from "react";
import axios from "axios";
import { apiurl } from "../ApiConstant";
import { useDispatch } from "react-redux";

export function useFetchData(ApiController, ReduxAction = null) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(apiurl + ApiController);
        if (ReduxAction !== null) {
          dispatch(ReduxAction(response.data));
        } else {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();
  }, [ApiController, ReduxAction]);

  return { data, error, loading };
}
