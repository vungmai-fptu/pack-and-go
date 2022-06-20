import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListUser } from "../../store/actions/user.action";
import TripItem from "./../TripItem/TripItem";
import { useIsLogin } from "./../../hooks/useIsLogin";
import SkeletonTripItem from "../SkeletonCard/SkeletonTripItem";
export default function RenderTripNoTitle() {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        listTrip: [],
        listTripToShow: [],
        hideLoadMore: false,
        showResetButton: false,
    });

    useEffect(
        () => {
            dispatch(getListUser(), getInitialItemList());
        },
        // eslint-disable-next-line
        []
    );
    const { listUser } = useSelector((state) => state.user);
    const { loading } = useIsLogin();
    const trips = listUser.map((user) => user.trips).flat();
    const getInitialItemList = () => {
        setState({
            listTrip: trips,
            listTripToShow: trips.slice(0, 3),
        });
    };
    const loadMore = () => {
        const visibleItemsCount = state.listTripToShow.length;
        const totalItems = trips.length;
        const loadTrip = [
            ...state.listTripToShow,
            ...trips.slice(visibleItemsCount, visibleItemsCount + 3),
        ];
        const isAllItemsLoaded = loadTrip.length === totalItems;
        setState({
            listTripToShow: loadTrip,
            hideLoadMore: isAllItemsLoaded,
            showResetButton: isAllItemsLoaded,
        });
    };

    return loading ? (
        <div className="w_cw">
            <div className="w_cW w_cX ">
                <label className="w_rI w_rT">New Trips</label>
                <div className="w_cx">
                    <SkeletonTripItem />
                </div>
            </div>
        </div>
    ) : (
        <div className="w_cw">
            <div className="w_cW w_cX ">
                <div className="w_cx">
                    {state.listTripToShow.map((listTrip, index) => (
                        <TripItem listTrip={listTrip} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}