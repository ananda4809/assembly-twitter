import React, {Component} from "react";
import { MDBDataTable} from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";


class Twitter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            twitterData : {}
        }
    }
    componentDidMount()
    {
        const email = (window.location.href).split("/").slice(-1);

        fetch("https://p1tfqpz941.execute-api.ap-south-1.amazonaws.com/dev", {
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify({
                "email": email.join()
            })
        })
        .then(res => res.json())
        .then(data => this.setState({twitterData: data}, ()=>{
            console.log("data fetched from server.. ", data);
        }));
    }

    render()
    {
        const data = this.state.twitterData;
        return (
            <div><br/>
            <MDBDataTable
                striped
                bordered
                small
                data={data}
                />
            </div>
        );
    }
}

export default Twitter;