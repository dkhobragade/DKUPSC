"use client";

import { Card, Center, Space, Text } from "@mantine/core";
import React, { useState } from "react";
import { ExamType, fontFamily } from "./Constants/types";
import Container from "./components/lowLevel/Container";
import { useRouter } from "next/navigation";

const examTypes: ExamType[] = [
  { key: 1, name: "UPSC" },
  { key: 2, name: "MPSC" },
];

export default function Home ()
{

  const [ hoveredCard, setHoveredCard ] = useState<number | null>( null )
  const router = useRouter()

  const handleTypeSelect = ( type: ExamType ) =>
  {
    router.push( type.key === 1 ? '/upsc' : '/mpsc' )
  }

  return (
    <Container>
      <Center>
        { examTypes.map( ( type: ExamType ) =>
          <React.Fragment key={ type.key }>
            <Card onClick={ () => handleTypeSelect( type ) }
              onMouseEnter={ () => setHoveredCard( type.key ) }
              onMouseLeave={ () => setHoveredCard( null ) }
              style={ getCardStyles( hoveredCard === type.key ) }
              shadow="sm" p={ 50 } radius="md" withBorder>
              <Center>
                <Text tt="capitalize" fz={ 50 } ff={ fontFamily[ 0 ] } >{ type.name }</Text>
              </Center>
            </Card>
            <Space w="md" />
          </React.Fragment>
        ) }
      </Center>
    </Container>
  );
}


const getCardStyles = ( isHovered: boolean ): React.CSSProperties => ( {
  cursor: "pointer",
  backgroundColor: isHovered ? "#944E63" : "#F0A04B",
  color: isHovered ? "#FFFFFF" : "#FCE7C8",
  transition: "all 0.3s ease",
} );