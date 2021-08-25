import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification altready exists");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}
export { CreateSpecificationUseCase };
