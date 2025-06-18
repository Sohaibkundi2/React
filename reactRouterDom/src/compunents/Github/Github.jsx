import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {
    const data = useLoaderData()

    // const [data, setdata] = useState(null)
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sohaibkundi2')
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setdata(data)
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching GitHub data:', error);
    //         })


    // }, [])
    // if (!data) return <div>Loading...</div>;

    return (
        <>
            <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6 flex flex-col items-center text-center">
                    <img
                        className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md hover:scale-105 transition-transform duration-300"
                        src={data.avatar_url}
                        alt="User avatar"
                    />
                    <h2 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                        {data.name || data.login}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@{data.login}</p>

                    <div className="mt-4 flex space-x-4">
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{data.followers}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{data.following}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Following</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold text-gray-900 dark:text-white">{data.public_repos}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">Repos</div>
                        </div>
                    </div>

                    <a
                        href={data.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 transition-colors duration-300"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </>

    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sohaibkundi2')
    return response.json()
}