What are SQL Databases?

SQL stands for Structured Query Language. SQL lets you access and manipulate databases. SQL became a standard of the American National Standards Institute (ANSI) in 1986, and of the
International Organization for Standardization (ISO) in 1987.

What are NoSQL Databases? What are some companies that use Mongo, what type of applications are these?

A NoSQL originally referring to non SQL or non relational is a database that provides a mechanism for storage and retrieval of data. This data is modeled in means other than the
tabular relations used in relational databases. Such databases came into existence in the late 1960s, but did not obtain the NoSQL moniker until a surge of popularity in the early
twenty-first century. NoSQL databases are used in real-time web applications and big data and their use are increasing over time.

Companies that use mongoDB are ebay, metlife aadhar etc.

What is the difference between SQL and NoSQL databases?

The Main Differences:

1. Type –
   SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
2. Language –
   SQL databases defines and manipulates data based on structured query language (SQL). A NoSQL database has dynamic schema for unstructured data.
3. The Scalability –
   In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on
   the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.

What are some features of MongoDB?

1. Ad-hoc queries for optimized, real-time analytics.
2. Indexing appropriately for better query executions.
3. Replication for better data availability and stability.
4. Sharding.

What are aggregate queries?
An aggregate query is a method of deriving group and subgroup data by analysis of a set of individual data entries. The term is frequently used by database developers and database
administrators.

What are pipelines in aggregation?

An aggregation pipeline consists of one or more stages that process documents:

1. Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
2. The documents that are output from a stage are passed to the next stage.
3. An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.

How can you group by a particular value in MongoDB?

We can group by single as well as multiple field from the collection, we can use $group operator in MongoDB to group fields from the collection and returns the new document as result.
We are using $avg, $sum, $max, $min, $push, $last, $first and $addToSet operator with group by in MongoDB.

How can you paginate on MongoDB?

1. MongoDB pagination by using limit method

   db.collection_name.find () .limit (number);

2. MongoDB pagination by using skip method

   db.collection_name.find () .skip (number);

3. MongoDB pagination using the ID field

   db.collection_name.find ( {'\_id': { 'Projection_operator': field_name } } )

4. MongoDB pagination using slice operator

   db.collection_name.find ( { }, { field_name: {$slice: [number1, number2] } } )

How can you sort in MongoDB?

To sort documents in MongoDB, you need to use sort() method.

What is indexing in MongoDB? Why do we need to use indexing? What are pros and cons for indexing?

What indexing does is sort our mongoDB collection in a particular order based on the value of one field(or more than one field). Assume that I have a collection called customers and
I have kept customerName as the field for indexing, then what MongoDB does is that it’ll create a list of all the names in an alphabetical order in the document.
The biggest advantage of indexing is that it speeds up your find, update and delete queries. Quite naturally because it is easier to search for the elements based on the indexed
field.
The disadvantages of indexing is that 1. It takes up memory (obviously). 2.It slows down write queries.

Write the query for indexing a field in MongoDB?

The basic syntax of createIndex() method is as follows().

    >db.COLLECTION_NAME.createIndex({KEY:1})

Here key is the name of the field on which you want to create index and 1 is for ascending order. To create index in descending order you need to use -1.

Example >db.mycol.createIndex({"title":1})
{
"createdCollectionAutomatically" : false,
"numIndexesBefore" : 1,
"numIndexesAfter" : 2,
"ok" : 1
}

In createIndex() method you can pass multiple fields, to create index on multiple fields.

    >db.mycol.createIndex({"title":1,"description":-1})

\What is the data structure used for indexing?

B-trees are the most commonly used data structures for indexes as they are time-efficient for lookups, deletions, and insertions. All these operations can be done in logarithmic
time. Data that is stored inside of a B-tree can be sorted.

Are values sorted in indexes?
What are Replica Sets in MongoDB?
A replica set in MongoDB is a group of mongod processes that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production
deployments.
Explain the structure of ObjectID in MongoDB.

An ObjectId in MongoDB is a 12-byte BSON type. In the 12-byte structure, the first 4 bytes of the ObjectId represent the time in seconds since the UNIX epoch. The next 3 bytes of the
ObjectId represent the machine identifier. The next 2 bytes of the ObjectId represent the process ID.

By default, which index is created by MongoDB for every collection?

Default \_id Index
MongoDB creates a unique index on the \_id field during the creation of a collection. The \_id index prevents clients from inserting two documents with the same value for the \_id field.

In which format MongoDB represents document structure?

In MongoDB, data is stored as documents. These documents are stored in MongoDB in JSON (JavaScript Object Notation) format.
What is the limitation of a document in MongoDB?

The maximum BSON document size is 16 megabytes. The maximum document size helps ensure that a single document cannot use excessive amount of RAM or, during transmission, excessive
amount of bandwidth.
What is the difference between MongoDB and Redis database?

MongoDB is a document-oriented, disk-based database optimized for operational simplicity, schema-free design and very large data volumes. Redis is an in-memory, persistent data
structure store that enables developers to perform common operations with minimal complexity and maximum performance.

How can you add references between multiple collections?

MongoDB applications use one of two methods to relate documents: Manual references save the \_id field of one document in another document as a reference. Your application runs a
second query to return the related data. These references are simple and sufficient for most use cases.

What are lookup in aggregation for MongoDB?

The $lookup operator is an aggregation operator or an aggregation stage, which is used to join a document from one collection to a document of another collection of the same database
based on some queries. Both the collections should belong to the same databases.

What are graph lookups?

graphLookup allows us to recursively traverse a graph structure represented in documents.
