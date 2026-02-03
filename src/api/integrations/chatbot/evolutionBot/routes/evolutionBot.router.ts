import { RouterBroker } from '@api/abstract/abstract.router';
import { IgnoreJidDto } from '@api/dto/chatbot.dto';
import { InstanceDto } from '@api/dto/instance.dto';
import { HttpStatus } from '@api/routes/index.router';
import { converso-whatsapp-apiBotController } from '@api/server.module';
import { instanceSchema } from '@validate/instance.schema';
import { RequestHandler, Router } from 'express';

import { converso-whatsapp-apiBotDto, converso-whatsapp-apiBotSettingDto } from '../dto/converso-whatsapp-apiBot.dto';
import {
  converso-whatsapp-apiBotIgnoreJidSchema,
  converso-whatsapp-apiBotSchema,
  converso-whatsapp-apiBotSettingSchema,
  converso-whatsapp-apiBotStatusSchema,
} from '../validate/converso-whatsapp-apiBot.schema';

export class converso-whatsapp-apiBotRouter extends RouterBroker {
  constructor(...guards: RequestHandler[]) {
    super();
    this.router
      .post(this.routerPath('create'), ...guards, async (req, res) => {
        const response = await this.dataValidate<converso-whatsapp-apiBotDto>({
          request: req,
          schema: converso-whatsapp-apiBotSchema,
          ClassRef: converso-whatsapp-apiBotDto,
          execute: (instance, data) => converso-whatsapp-apiBotController.createBot(instance, data),
        });

        res.status(HttpStatus.CREATED).json(response);
      })
      .get(this.routerPath('find'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => converso-whatsapp-apiBotController.findBot(instance),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetch/:converso-whatsapp-apiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => converso-whatsapp-apiBotController.fetchBot(instance, req.params.converso-whatsapp-apiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .put(this.routerPath('update/:converso-whatsapp-apiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<converso-whatsapp-apiBotDto>({
          request: req,
          schema: converso-whatsapp-apiBotSchema,
          ClassRef: converso-whatsapp-apiBotDto,
          execute: (instance, data) => converso-whatsapp-apiBotController.updateBot(instance, req.params.converso-whatsapp-apiBotId, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .delete(this.routerPath('delete/:converso-whatsapp-apiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => converso-whatsapp-apiBotController.deleteBot(instance, req.params.converso-whatsapp-apiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('settings'), ...guards, async (req, res) => {
        const response = await this.dataValidate<converso-whatsapp-apiBotSettingDto>({
          request: req,
          schema: converso-whatsapp-apiBotSettingSchema,
          ClassRef: converso-whatsapp-apiBotSettingDto,
          execute: (instance, data) => converso-whatsapp-apiBotController.settings(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetchSettings'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => converso-whatsapp-apiBotController.fetchSettings(instance),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('changeStatus'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: converso-whatsapp-apiBotStatusSchema,
          ClassRef: InstanceDto,
          execute: (instance, data) => converso-whatsapp-apiBotController.changeStatus(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .get(this.routerPath('fetchSessions/:converso-whatsapp-apiBotId'), ...guards, async (req, res) => {
        const response = await this.dataValidate<InstanceDto>({
          request: req,
          schema: instanceSchema,
          ClassRef: InstanceDto,
          execute: (instance) => converso-whatsapp-apiBotController.fetchSessions(instance, req.params.converso-whatsapp-apiBotId),
        });

        res.status(HttpStatus.OK).json(response);
      })
      .post(this.routerPath('ignoreJid'), ...guards, async (req, res) => {
        const response = await this.dataValidate<IgnoreJidDto>({
          request: req,
          schema: converso-whatsapp-apiBotIgnoreJidSchema,
          ClassRef: IgnoreJidDto,
          execute: (instance, data) => converso-whatsapp-apiBotController.ignoreJid(instance, data),
        });

        res.status(HttpStatus.OK).json(response);
      });
  }

  public readonly router: Router = Router();
}
