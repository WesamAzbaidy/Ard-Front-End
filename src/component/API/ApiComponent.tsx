import axios, { Method } from "axios";
import { Dispatch, AnyAction } from "redux";

interface ApiComponentProps {
  url: string;
  method: Method;
  dispatch: Dispatch<AnyAction>;
  onRequest: () => AnyAction;
  onSuccess: (data: any) => AnyAction;
  onError: (error: any) => AnyAction;
  data?: any;
  params?: any;
  headers?: any;
}

const ApiComponent = async ({
  url,
  method,
  dispatch,
  onRequest,
  onSuccess,
  onError,
  data = {},
  params = {},
  headers = {},
}: ApiComponentProps) => {
  dispatch(onRequest());

  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      headers,
    });

    dispatch(onSuccess(response.data));
  } catch (error) {
    dispatch(onError(error));
  }
};

export default ApiComponent;
