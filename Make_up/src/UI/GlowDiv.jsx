export default function GlowDiv({image,heading,desc}){
return <div className="glow-div">
            <img src={image} className="max-w-[6rem]" alt="Glow-Image" />
        <div className="content-glow">
            <h3>{heading}</h3>
            <p>{desc}</p>
        </div>
</div>
}