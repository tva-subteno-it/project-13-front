interface Props{
    icon: string;
    title: string;
    description: string;
}

export default function Feature({icon, title, description}: Props){
    return <div className="feature-item">
        <img src={icon} alt={title} className="feature-icon"/>
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
    </div>
}