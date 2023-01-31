export interface CrudInterface<T, D, W> {
  findOne(id: number): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(data: D): Promise<T>;
  update(params: { where: W; data: D }): Promise<T>;
  delete(id: number): Promise<T>;
}
