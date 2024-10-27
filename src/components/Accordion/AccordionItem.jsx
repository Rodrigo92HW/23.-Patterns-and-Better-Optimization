import { createContext, useContext } from "react"

const AccordItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordItemContext);
    if(!ctx) {
        throw new Error("Accordion item related component must be correctly wrap");
    }
    return ctx
}

export default function AccordionItem({id, className,  children }) {

    return (
        <AccordItemContext.Provider value={id}>
        <li className={className}>
            {children}            
        </li>
        </AccordItemContext.Provider>
    )
}