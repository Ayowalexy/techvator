import { Rings, TailSpin } from "react-loader-spinner";

const Preloader = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}>
            <Rings
                color="#222055"
                height={100}
                width={110}
                name="Rings"
            />
        </div>
    )
}

export default Preloader