export default function Nutrition(props) {
    return <>
        <h3>{props.macro}</h3>
        <p>Description: {props.description}</p>
        <p><strong>AMDR</strong> (Acceptable Macronutrient Distribution Range): {props.AMDR}</p>
        <p>Calories: {props.calories}</p>
        <p>Functions: {props.functions}</p>
        <li>Major Sources: </li>
        {
            props.majorSources.length > 0 ? props.majorSources.map(src => {
                return <ul>{src}</ul>;
            }) : <></>
        }
    </>
};