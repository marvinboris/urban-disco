import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
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
                    <Bar dataKey="pending" fill="#e79300" />
                    <Bar dataKey="cancelled" fill="#ff0b33" />
                    <Bar dataKey="solved" fill="#049d27" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
