import Feature from "./Feature.tsx";
import {FEATURES} from "../../constants";

export default function Badges() {
    return <section className="features">
        <h2 className="sr-only">Features</h2>
        {FEATURES.map(data => (
                <Feature {...data} key={data.title}/>
        ))}
    </section>
}