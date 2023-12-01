import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import Card from "../Card";
import { ClusterCard } from "../ClusterCard";
import { Routes, Route, useParams } from 'react-router-dom';

export default function searchResults() {
    const [searchQuery,setSearchQuery]=useState('')
    const [clusters, setClusters] = useState([])
    const [docs, setDocs] = useState([])
    const [error, setError] = useState(null)
    const searchInput = useLocation();  // append this search input(searchInput.state.key) to the api
    const navigateTo = useNavigate();



    const fetchClustersData = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setClusters(result)
        }
        catch (e) {
            setError(e)
        }
    }

    const fetchDocsData = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setDocs(result)
        }
        catch (e) {
            setError(e)
        }
    }
    // let url; // set the api endpoint to this url 
    // useEffect(()=>{

    //   

    //     fetchClustersData();
    //     fetchDocsData();
    // },[])


    function onSearch() {
        if (searchQuery.trim() !== '') {
            setError(false)
            // fetchClustersData()
            // fetchDocsData()
            console.log(searchQuery)
            return;
        }
        else {
            setError(true)
            return;
        }
    }

    useEffect(() => {
        //call both fetch methods here and remove setClusters and setDocs

        setClusters([
            {
                clusterId: '1',
                clusterName: 'Artificial Intelligence',
                documentList: ['AI', 'DAI']
            },
            {
                clusterId: '2',
                clusterName: 'Machine Learning',
                documentList: ['AML', 'ML']
            },
            {
                clusterId: '3',
                clusterName: 'Deep Learning',
                documentList: ['DL', 'DML']
            }
        ])

        setDocs([
            {
                documentId: '1',
                clusterId: 1,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '2',
                clusterId: 1,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '3',
                clusterId: 1,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '4',
                clusterId: 1,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '5',
                clusterId: 1,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '6',
                clusterId: 1,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '7',
                clusterId: 1,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '8',
                clusterId: 1,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '9',
                clusterId: 2,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '10',
                clusterId: 2,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '11',
                clusterId: 2,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '12',
                clusterId: 2,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '13',
                clusterId: 2,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '14',
                clusterId: 2,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '15',
                clusterId: 2,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '16',
                clusterId: 2,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '17',
                clusterId: 3,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '18',
                clusterId: 3,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '19',
                clusterId: 3,
                documentTitle: 'Neural Networks',
                keywords: ['CNN', 'Neural Networks'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2021
            },
            {
                documentId: '20',
                clusterId: 3,
                documentTitle: 'Deep Learning',
                keywords: ['Deep Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2022
            },
            {
                documentId: '21',
                clusterId: 3,
                documentTitle: 'Machine Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },
            {
                documentId: '22',
                clusterId: 3,
                documentTitle: 'Nural Learning',
                keywords: ['Maching Learning', 'Reinforcement Learning'],
                link: 'https://arxiv.org/pdf/2107.03374.pdf',
                year: 2020
            },

        ])
        
        navigateTo('/searchResults/0')
        
    }, [])

    return (
        <div className="flex items-center  h-screen">
            <div className="flex h-screen mt-4">
                <div id="sidebar" className="overflow-auto bg-gray-900 text-white p-4 ">
                    <h1 className="text-2xl font-bold mb-4 text-white">SearchResults</h1>
                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                        className="bg-gray-700 text-white p-2 rounded"
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    {error && <p className="text-red-500 mb-4">*Please Enter Some Text</p>}
                    <div id="search-spinner" aria-hidden hidden={true} className="spinner"></div>
                    <div className="sr-only" aria-live="polite"></div>
                    <div className=" mt-2 mb-4 flex">
                        <button type="submit" className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSearch}>
                            New
                        </button>
                        <button type="submit" className=" ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onSearch}>
                            New
                        </button>
                    </div>
                    <nav>
                        <ul className=" mt-2 mb-4 ">
                            {clusters?.map((cluster) => <Link  to={`${cluster.clusterId}`}><ClusterCard key={cluster.clusterName} clusterId={cluster.clusterId} clusterName={cluster.clusterName} clusterLength={cluster.documentList.length} /></Link>)}
                        </ul>
                    </nav>
                </div>
                <div id='detail'>
                    <Outlet context={[docs]} />
                </div>
            </div>
        </div>
    )
}