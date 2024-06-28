import React, {ReactNode} from 'react';
import Row from "@/presentation/components/layout/Row";

type Props = {
    children: ReactNode
    onSubmit: (e: React.FormEvent<HTMLFormElement>)=> void
}
const Form: React.FC<Props> = ({onSubmit, children}) => {
    return (
        <form onSubmit={onSubmit}>
            <Row>
                {children}
            </Row>
        </form>
    );
};

export default Form;
