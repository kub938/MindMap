// src/auth/auth.service.ts
import { Injectable } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async login(googleUser: any) {
    return this.authRepository.login(googleUser);
  }
}
