import { Dispatch, SetStateAction, useEffect } from "react";

import { Post } from "../../../shared";

export interface Props {
  data?: Post[];
  isLoading: boolean;
  setPostStart: Dispatch<SetStateAction<number>>;
}
