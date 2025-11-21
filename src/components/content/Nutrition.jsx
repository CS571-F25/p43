import { Col, Container, Row } from "react-bootstrap";

import Macronutrition from './Macronutrition'
import { useEffect, useState } from "react";

export default function Nutrition(props) {
    const [nutriFacts, setNutriFacts] = useState([]);

    // useEffect(() => {
    //     fetch("https://cs571api.cs.wisc.edu/rest/su25/bucket/nutrition_facts", {
    //         headers: {
    //             "X-CS571-ID": CS571.getBadgerId()
    //         }
    //     })
    //     .then(res => res.json()
    //     //     if (res.status === 200) {
    //     //         return res.json();
    //     //     }
    //     // })
    //     )
    //     .then(facts => {
    //         console.log(facts.results);
    //         setNutriFacts(facts.results);
    //     })

    // }, [])

    return <>
        <h1>Nutrition</h1>
        <h2>Macronutritions:</h2>
        <Container>
            <Row>
                {
                    nutriFacts.map(fact => {
                        return <Col key={fact.id} xs={12} sm={12} md={6} lg={4} xl={3} >
                            <Macronutrition {...nutriFacts}/>
                        </Col>
                    })
                }
            </Row>
        </Container>
    </>
};