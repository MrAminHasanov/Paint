import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as TollActions } from "../Store/Toll/Toll.slice";

const rootActions = {
    ...TollActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
