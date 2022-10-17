import Button from 'app/components/Button/Button.index';
import React, { useEffect, useRef, useState } from 'react';
import {
  BodyStyled,
  Container,
  HeaderStyled,
  ItemStyled,
} from './Collapse.style';

const mappedItems = new Map();

const getParentElementId = refNode => {
  return refNode.current.parentElement.dataset.collapseId;
};

const Header = ({ children }) => {
  const headerRef: any = useRef();

  return (
    <HeaderStyled
      ref={headerRef}
      onClick={() => {
        const parentId = getParentElementId(headerRef);
        const item = mappedItems.get(parentId);

        item.handleActive();
      }}
      className="collapse__header"
    >
      {children}
    </HeaderStyled>
  );
};

const Body = ({ children }) => {
  const bodyRef: any = useRef();
  const [isActive, setActive] = useState(false);
  const [elementHeight, setElementHeight] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleActive = () => {
    const height = bodyRef.current.scrollHeight;

    setActive(!isActive);
    setElementHeight(height);
  };

  useEffect(() => {
    const parentId = getParentElementId(bodyRef);

    mappedItems.set(parentId, { handleActive });
  }, [handleActive]);
  return (
    <>
      <BodyStyled
        ref={bodyRef}
        active={isActive}
        height={elementHeight}
        className="collapse__body"
      >
        {children}
      </BodyStyled>
    </>
  );
};

const Item = ({ children, id }: any) => {
  const itemRef: any = useRef();

  return (
    <ItemStyled ref={itemRef} data-collapse-id={id} className="collapse__item">
      {children}
    </ItemStyled>
  );
};

export const Collapse = ({ children, offset }: any) => {
  const currentCount = useRef(1);
  const cachedNextChildren = useRef(children);
  const currentChildrenRef = useRef<any>([]);

  cachedNextChildren.current = children.slice(
    offset * currentCount.current,
    offset * (currentCount.current + 1),
  );

  const [currentChildren, setCurrentChildren] = useState(
    offset ? children.slice(0, offset) : children,
  );

  const childs = [
    ...currentChildrenRef.current,
    ...React.Children.map(currentChildren, (child, index) => {
      const startIndex = offset * currentCount.current - offset;
      const currentIndex = index + 1;

      const itemId = `item__${startIndex + currentIndex}`;

      mappedItems.set(itemId, {});

      return React.cloneElement(child, { id: itemId }, child.props.children);
    }),
  ];

  return (
    <Container>
      {childs}
      {offset && (
        <div className="center see__more__btn">
          <Button
            title={
              cachedNextChildren.current.length === 0
                ? 'Recolher tudo'
                : 'Mostrar mais'
            }
            size="lg"
            onClick={() => {
              currentCount.current += 1;

              currentChildrenRef.current = [...childs];

              if (cachedNextChildren.current.length !== 0) {
                setCurrentChildren([...cachedNextChildren.current]);
              } else if (cachedNextChildren.current.length === 0) {
                const initialValues = currentChildrenRef.current.slice(0, 5);
                currentCount.current = 1;

                currentChildrenRef.current = initialValues;
                setCurrentChildren([]);
              }
            }}
          />
        </div>
      )}
    </Container>
  );
};

Collapse.Item = Item;
Collapse.Body = Body;
Collapse.Header = Header;
