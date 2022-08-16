import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
    const client = await clientPromise
    const db = client.db('portfolio')

    switch (req.method) {
        case 'GET':
            const projects = await db.collection('projects').find({}).toArray()

            res.json(projects)
            break
        default:
            throw new Error('Unknown request type')
    }
}
