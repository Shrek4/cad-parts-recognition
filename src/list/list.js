import React, { Component, Suspense } from 'react';
import { Row } from 'react-bootstrap'
import './list.css'
import Filter from '../filter/filter';
import Item from '../item/item';
import LazyLoad from 'react-lazyload';


class ListTable extends Component {
    constructor(props) {
        super(props)

    }



    render() {
        let data;
        if (this.props.data) {
            // console.log(this.props.data)
            data = this.props.data.map(el => {
                return (
                    <LazyLoad height={200} key={el.id}>
                    <Item
                        key={el.id}
                        id={el.id}
                        class={el.class}
                        size={el.size}
                        standart={el.standart}
                        images={el.images}
                    />
                    </LazyLoad>
                )
            })

            return (
                // Adding a key to remove the warning
                <div id="list">
                    <Filter filterevent={this.props.filterevent} filtersize={this.props.filtersize} filterstandart={this.props.filterstandart} />
                    
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