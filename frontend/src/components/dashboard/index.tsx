import React from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    ResponsiveContainer,
} from 'recharts';

const data = [
    { name: 'times', 'quantidade de jogadores': 200 },
    { name: 'times', 'quantidade de jogadores': 59 },
    { name: 'times', 'quantidade de jogadores': 80 },
    { name: 'times', 'quantidade de jogadores': 81 },
    { name: 'times', 'quantidade de jogadores': 56 },
    { name: 'times', 'quantidade de jogadores': 55 },
    { name: 'times', 'quantidade de jogadores': 40 },
    { name: 'times', 'quantidade de jogadores': 40 },
    { name: 'times', 'quantidade de jogadores': 40 },
    { name: 'times', 'quantidade de jogadores': 40 },
    { name: 'times', 'quantidade de jogadores': 40 },
    { name: 'times', 'quantidade de jogadores': 40 },

];

const MyChart: React.FC = () => {
    return (
        <ResponsiveContainer width="80%" height={300}>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantidade de jogadores" fill="#84d2d8" barSize={30} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default MyChart;
