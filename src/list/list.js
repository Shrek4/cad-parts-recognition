import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import logo from './../placeholder.png';
import './list.css'
import Filter from '../filter/filter';



class ListTable extends Component {


    render() {
        let data;
        if (this.props.data) {
            console.log(this.props.data)
            data = this.props.data.map(el => {
                return (
                <Col>
                    <Card key={el.id}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body>
                            <Card.Title>ID: {el.id}</Card.Title>
                            <Card.Text>
                                Класс: {el.class}<br />
                                Исполнение: {el.specification}<br />
                                Стандарт: {el.standart}<br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                )
            })

            return (
                // Adding a key to remove the warning
                <div id="list">
                    <Filter filterevent={this.props.filterevent}/>
                    <Row xs={1} md={5} className="g-4">
                        {data}
                    </Row>
                </div>
            );
        }
        else {
            return (
                <div>
                    ошибка
                </div>
            )
        }

    }
}

export default ListTable