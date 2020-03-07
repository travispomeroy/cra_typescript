import React, {MouseEvent, useState} from "react";

interface Props {
    headings: string[];
}

const Tabs: React.FC<Props> = ({headings}: Props) => {
    const [activeHeading, setActiveHeading] = useState<string>(
        headings && headings.length > 0 ? headings[0] : ""
    );

    const handleTabClicked = (event: MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        const li = event.currentTarget;
        const heading: string = li.textContent ? li.textContent : "";
        setActiveHeading(heading);
    };

    return (
        <ul className="tabs">
            {headings.map(x => (
                <li role="presentation" onClick={handleTabClicked} className={x === activeHeading ? "active" : ""}>{x}</li>
            ))}
        </ul>
    );
};

export default Tabs;
