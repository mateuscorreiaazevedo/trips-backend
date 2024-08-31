import { Injectable } from '@nestjs/common'

@Injectable()
export class SnowflakeGeneratorService {
  private workerId: number
  private epoch: number
  private sequence: number
  private lastTimestamp: number
  private sequenceMask: number
  private workerIdBits: number
  private timestampBits: number
  private maxWorkerId: number

  constructor() {
    // Gerar um workerId aleatório entre 0 e 31 (5 bits)
    this.workerId = Math.floor(Math.random() * 32)
    this.epoch = 946684800000 // Default epoch
    this.sequence = 0
    this.lastTimestamp = -1
    this.sequenceMask = 0xfff // 12 bits for sequence
    this.workerIdBits = 5 // 5 bits for worker ID
    this.timestampBits = 41 // 41 bits for timestamp
    this.maxWorkerId = -1 ^ (-1 << this.workerIdBits)
  }

  generateID() {
    let timestamp = Date.now() - this.epoch
    if (timestamp === this.lastTimestamp) {
      this.sequence = (this.sequence + 1) & this.sequenceMask
      if (this.sequence === 0) {
        while (timestamp <= this.lastTimestamp) {
          timestamp = Date.now() - this.epoch
        }
      }
    } else {
      this.sequence = 0
    }

    this.lastTimestamp = timestamp

    // 41 bits timestamp + 5 bits worker ID + 12 bits sequence
    const id = (
      (timestamp << (this.workerIdBits + 12)) |
      (this.workerId << 12) |
      this.sequence
    )
      .toString(16)
      .padStart(16, '0')

    return id
  }
}
