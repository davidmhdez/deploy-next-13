'use client'
import React, {ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "@/presentation/config/store";

type Props = {
    children: ReactNode
}
const Providers: React.FC<Props> = ({children}) => {
    return <Provider store={store}>{children}</Provider>
};

export default Providers;
