import React from 'react';

const ListItem = function (props){
    return (
      <div className="list-item">
        <li>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    props.getWeather(props.name)
                }}
            >{props.name}</a>
        </li>

        <style jsx>{`
            .list-item {
                margin-bottom: 15px;
                font-size: 23px;
            }
        `}</style>
      </div>
    );
}

export default ListItem;
