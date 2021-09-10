import React, { PureComponent } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default class FinanceTracker extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

    render() {
        return (
            <ResponsiveContainer>
                <BarChart data={this.props.data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#e79300" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
