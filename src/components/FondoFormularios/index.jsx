export default function FondoFormularios(props){
    return(
        <div className="min-h-screen bg-gradient-to-b via-slate-900 from-black to-fuchsia-900  place-items-center">
        {props.children}
        <img src="/img/icono.png" alt="Icono" className="absolute top-[80%] scale-50" />
        </div>
    )
}