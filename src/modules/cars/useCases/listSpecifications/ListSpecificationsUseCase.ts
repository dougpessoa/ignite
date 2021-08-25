import { Category } from "../../model/Category";
import { ISpecificationRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute(): Category[] {
    const categories = this.specificationRepository.list();

    return categories;
  }
}

export { ListSpecificationsUseCase };
