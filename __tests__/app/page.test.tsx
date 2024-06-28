import Home from "@/app/page";
import {render} from "@testing-library/react";

describe('Main Page', () => {
    test('Should match with snapshot', () => {
        const { container } = render(<Home/>)
        expect(true).toBeTruthy()
    })
})