import { Connection } from 'mongoose';
import { ObjectId } from 'mongodb';

type DbTestUtilsParams = {
  connection: Connection;
  collectionName: string;
};

type AssertDocumentFoundParams = DbTestUtilsParams & {
  id: string | ObjectId;
};

export const assertDocumentFound = async ({
  connection,
  collectionName,
  id,
}: AssertDocumentFoundParams): Promise<boolean> => {
  const document = await connection
    .collection(collectionName)
    .findOne({ _id: id });
  return !!document;
};

type DeleteDocumentParams = DbTestUtilsParams & { id: string | ObjectId };

export const deleteDocument = async ({
  connection,
  collectionName,
  id,
}: DeleteDocumentParams): Promise<void> => {
  await connection.collection(collectionName).findOneAndDelete({ _id: id });
};

type InsertDocumentParams = DbTestUtilsParams & {
  document: Record<string, unknown>;
};

export const insertDocument = async ({
  connection,
  collectionName,
  document,
}: InsertDocumentParams): Promise<string> => {
  const oid =
    typeof document._id === 'string'
      ? new ObjectId(document._id)
      : new ObjectId();
  const result = await connection
    .collection(collectionName)
    .insertOne({ ...document, _id: oid });
  return result.insertedId.toString();
};
