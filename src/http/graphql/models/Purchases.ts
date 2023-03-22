import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Product } from './Product';

enum PurchaseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  FAILED = 'FAILED',
}

registerEnumType(PurchaseStatus, {
  name: 'PurchaseStatus',
  description: 'Available purchase statuses',
});

@ObjectType()
export class Purchase {
  @Field(() => ID)
  id: string;

  @Field()
  status: PurchaseStatus;

  @Field()
  createdAt: Date;

  @Field(() => Product)
  product: Product;

  productId: string;
}
