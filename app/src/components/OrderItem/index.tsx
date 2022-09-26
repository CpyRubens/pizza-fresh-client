import { ReactComponent as Trash } from "assets/icons/trash.svg";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { ProductResponse } from "types/Product";
import * as S from "./style";

type DivType = ButtonHTMLAttributes<HTMLDivElement>;

export type OrderItemProps = {
  product: ProductResponse;
  quantity: number;
  observation?: string;
  onRemoveItem?:() => void
} & DivType;

const OrderItem = ({
  product,
  quantity,
  observation = "",
  onRemoveItem,
  ...props
}: OrderItemProps) => {
  const [quantityState, setQuantityState] = useState(quantity);
  const [observationState, setObservationState] = useState(observation);

  const handleQuantity = (data: number) => {
    setQuantityState(data);
  };

  const handleObservation = (data: string) => {
    setObservationState(data);
  };

  useEffect(() => {
    handleQuantity(quantity)
  }, [quantity]);

  useEffect(() => {
    handleObservation(observation)
  }, [observation])
  return (
    <S.OrderItens {...props} role="listitem">
      <S.OrderItemLeft>
        <S.OrderItemLeftTop>
          <S.OrderItemProduct>
            <S.OrderItemProductImage
              src={product.image}
              alt={`Pizza de ${product.name}`}
            />
            <S.OrderItemProductDetails>
              <S.OrderItemProductDetailsName>
                {product.name}
              </S.OrderItemProductDetailsName>
              <S.OrderItemProductDetailsPrice>
                R$ {product.price}
              </S.OrderItemProductDetailsPrice>
            </S.OrderItemProductDetails>
          </S.OrderItemProduct>
          <S.OrderItemQuantity
            type="number"
            value={quantityState}
            onChange={({ target }) => {
              setQuantityState(Number(target.value));
            }}
          />
        </S.OrderItemLeftTop>
        <S.OrderItemLeftObservation
          value={observationState}
          type="text"
          placeholder="Observações do pedido"
          onChange={({ target }) => {
            setObservationState(target.value);
          }}
        />
      </S.OrderItemLeft>
      <S.OrderItemRight>
        <S.OrderItemRightTotalPrice>
          R$ {Number(product.price * quantityState).toFixed(2)}
        </S.OrderItemRightTotalPrice>
        <S.OrderItemRightTrash>
          <Trash />
        </S.OrderItemRightTrash>
      </S.OrderItemRight>
    </S.OrderItens>
  );
};

export default OrderItem; 