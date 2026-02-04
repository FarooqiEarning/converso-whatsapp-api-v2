import { RouterBroker } from '@api/abstract/abstract.router';
import { IgnoreJidDto } from '@api/dto/chatbot.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { HttpStatus } from '@api/routes/index.router';
import { newConversoWhatsappApiBotController } from '@api/server.module';
import { instanceSchema } from '@validate/instance.schema';
import { RequestHandler, Router } from 'express';

import { conversoWhatsappApiBotDto, conversoWhatsappApiBotSettingDto } from '../dto/conversoWhatsappApiBot.dto';
import {
  conversoWhatsappApiBotIgnoreJidSchema,
  conversoWhatsappApiBotSchema,
  conversoWhatsappApiBotSettingSchema,
  conversoWhatsappApiBotStatusSchema,
} from '../validate/conversoWhatsappApiBot.schema';

export class conversoWhatsappApiBotRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      .post(this.routerPath('create'), ...guards, async (req, res) => {
        const response = await this.dataValidate<conversoWhatsappApiBotDto>({
          request: req,
          schema: conversoWhatsappApiBotSchema,
          ClassRef: conversoWhatsappApiBotDto,
          execute: (instance, data) => newConversoWhatsappApiBotController.createBot(instance, data),
        });

        res.status(HttpStatus.CREATED).json(response);
      })
      .get(this.routerPath('find'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => newConversoWhatsappApiBotController.findBot(instance),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetch/:conversoWhatsappApiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => newConversoWhatsappApiBotController.fetchBot(instance, req.params.conversoWhatsappApiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .put(this.routerPath('update/:conversoWhatsappApiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<conversoWhatsappApiBotDto>({
          request: req,
          schema: conversoWhatsappApiBotSchema,
          ClassRef: conversoWhatsappApiBotDto,
          execute: (instance, data) => newConversoWhatsappApiBotController.updateBot(instance, req.params.conversoWhatsappApiBotId, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .delete(this.routerPath('delete/:conversoWhatsappApiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => newConversoWhatsappApiBotController.deleteBot(instance, req.params.conversoWhatsappApiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('settings'), ...guards, async (req, res) => {
        const response = await this.dataValidate<conversoWhatsappApiBotSettingDto>({
          request: req,
          schema: conversoWhatsappApiBotSettingSchema,
          ClassRef: conversoWhatsappApiBotSettingDto,
          execute: (instance, data) => newConversoWhatsappApiBotController.settings(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetchSettings'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => newConversoWhatsappApiBotController.fetchSettings(instance),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('changeStatus'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: conversoWhatsappApiBotStatusSchema,
          ClassRef: InstanceDto,
          execute: (instance, data) => newConversoWhatsappApiBotController.changeStatus(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetchSessions/:conversoWhatsappApiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => newConversoWhatsappApiBotController.fetchSessions(instance, req.params.conversoWhatsappApiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('ignoreJid'), ...guards, async (req, res) => {
        const response = await this.dataValidate<IgnoreJidDto>({
          request: req,
          schema: conversoWhatsappApiBotIgnoreJidSchema,
          ClassRef: IgnoreJidDto,
          execute: (instance, data) => newConversoWhatsappApiBotController.ignoreJid(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
