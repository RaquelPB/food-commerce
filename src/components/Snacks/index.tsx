import { FiPlus } from 'react-icons/fi'

import { useCart } from '../../hooks/useCart'

import { Container } from "./styles"



interface SnacksProps {
    snacks: any[]
}

export function Snacks({ snacks }: SnacksProps) {
    const { addSnackIntoCart } = useCart()

    return(
        <Container>
            {snacks.map((snack) => (
                <div key={snack.id} className="snack">
                    <h2>{snack.name}</h2>
                    <img src={snack.image} alt={snack.name} />
                    <p>{snack.description}</p>
                    <div>
                        <strong>{snack.price}</strong>
                        <button type="button" onClick={() => addSnackIntoCart(snack)}>
                            <FiPlus />
                        </button>
                    </div>
                </div>
            ))}
        </Container>
    )
}